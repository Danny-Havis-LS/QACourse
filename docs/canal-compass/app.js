function tripApp() {
  return {
    trip: TRIP,
    days: DAYS,
    packing: PACKING,
    badges: BADGES,
    activeDay: 1,
    activeTab: "itinerary",
    notes: "",
    checkedPacking: [],
    scavengerDone: {},
    earnedBadges: [],
    revealedTrivia: {},
    kidsOpen: true,

    tabs: [
      { id: "overview", label: "Overview" },
      { id: "itinerary", label: "Itinerary" },
      { id: "kids", label: "🎮 Kids Zone" },
      { id: "packing", label: "Packing" },
      { id: "notes", label: "Notes" },
    ],

    get daysUntil() {
      const dep = new Date("2026-07-07T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return Math.ceil((dep - today) / 86400000);
    },

    get currentDay() {
      return this.days.find((d) => d.day === this.activeDay) || this.days[0];
    },

    get packedCount() {
      return this.checkedPacking.length;
    },

    get familyScore() {
      let score = this.earnedBadges.length * 50;
      score += Object.keys(this.scavengerDone).filter((k) => this.scavengerDone[k]).length * 20;
      score += Object.keys(this.revealedTrivia).filter((k) => this.revealedTrivia[k]).length * 10;
      return score;
    },

    get scavengerProgress() {
      const day = this.currentDay;
      if (!day.kidZone?.scavenger?.length) return { done: 0, total: 0 };
      const total = day.kidZone.scavenger.length;
      const done = day.kidZone.scavenger.filter((_, i) => this.isScavengerDone(day.day, i)).length;
      return { done, total };
    },

    init() {
      try {
        const saved = localStorage.getItem("canal-compass-notes");
        if (saved) this.notes = saved;
        const packed = localStorage.getItem("canal-compass-packing");
        if (packed) this.checkedPacking = JSON.parse(packed);
        const scavenger = localStorage.getItem("canal-compass-scavenger");
        if (scavenger) this.scavengerDone = JSON.parse(scavenger);
        const badges = localStorage.getItem("canal-compass-badges");
        if (badges) this.earnedBadges = JSON.parse(badges);
        const trivia = localStorage.getItem("canal-compass-trivia");
        if (trivia) this.revealedTrivia = JSON.parse(trivia);
      } catch { /* defaults */ }

      const today = new Date();
      const tripStart = new Date("2026-07-07");
      if (today >= tripStart && today <= new Date("2026-07-16")) {
        const dayNum = Math.floor((today - tripStart) / 86400000) + 1;
        this.activeDay = Math.min(Math.max(dayNum, 1), 10);
      }

      this.checkAllBadges();
    },

    selectDay(n) {
      this.activeDay = n;
      if (this.activeTab !== "kids") this.activeTab = "itinerary";
    },

    goToKidsDay(n) {
      this.activeDay = n;
      this.activeTab = "kids";
    },

    scavengerKey(day, index) {
      return `${day}-${index}`;
    },

    isScavengerDone(day, index) {
      return !!this.scavengerDone[this.scavengerKey(day, index)];
    },

    toggleScavenger(day, index) {
      const key = this.scavengerKey(day, index);
      this.scavengerDone[key] = !this.scavengerDone[key];
      localStorage.setItem("canal-compass-scavenger", JSON.stringify(this.scavengerDone));
      this.checkBadgeForDay(day);
    },

    triviaKey(day, index) {
      return `${day}-${index}`;
    },

    isTriviaRevealed(day, index) {
      return !!this.revealedTrivia[this.triviaKey(day, index)];
    },

    revealTrivia(day, index) {
      const key = this.triviaKey(day, index);
      if (!this.revealedTrivia[key]) {
        this.revealedTrivia[key] = true;
        localStorage.setItem("canal-compass-trivia", JSON.stringify(this.revealedTrivia));
      }
    },

    hasBadge(badgeId) {
      return this.earnedBadges.includes(badgeId);
    },

    checkBadgeForDay(dayNum) {
      const day = this.days.find((d) => d.day === dayNum);
      if (!day?.kidZone?.badge) return;
      const badgeId = day.kidZone.badge.id;
      if (this.hasBadge(badgeId)) return;
      const allDone = day.kidZone.scavenger.every((_, i) => this.isScavengerDone(dayNum, i));
      if (allDone) {
        this.earnedBadges.push(badgeId);
        localStorage.setItem("canal-compass-badges", JSON.stringify(this.earnedBadges));
      }
    },

    checkAllBadges() {
      this.days.forEach((d) => this.checkBadgeForDay(d.day));
    },

    togglePacking(item) {
      const i = this.checkedPacking.indexOf(item);
      if (i === -1) this.checkedPacking.push(item);
      else this.checkedPacking.splice(i, 1);
      localStorage.setItem("canal-compass-packing", JSON.stringify(this.checkedPacking));
    },

    isPacked(item) {
      return this.checkedPacking.includes(item);
    },

    saveNotes() {
      localStorage.setItem("canal-compass-notes", this.notes);
    },

    googleMapsUrl(dest) {
      return `https://www.google.com/maps/search/?api=1&query=${dest.lat},${dest.lng}`;
    },

    googleNavigateUrl(dest) {
      return `https://www.google.com/maps/dir/?api=1&destination=${dest.lat},${dest.lng}&travelmode=driving`;
    },

    wazeUrl(dest) {
      return `https://www.waze.com/ul?ll=${dest.lat},${dest.lng}&navigate=yes`;
    },

    osmEmbedUrl(dest) {
      const d = 0.04;
      const bbox = `${dest.lng - d},${dest.lat - d},${dest.lng + d},${dest.lat + d}`;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${dest.lat}%2C${dest.lng}`;
    },

    handleKidLink(url) {
      if (url === "#packing-tab") {
        this.activeTab = "packing";
        return false;
      }
      return true;
    },
  };
}
