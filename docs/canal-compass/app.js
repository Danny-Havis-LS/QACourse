function tripApp() {
  return {
    trip: TRIP,
    days: DAYS,
    packing: PACKING,
    activeDay: 1,
    activeTab: "itinerary",
    notes: "",
    checkedPacking: [],

    tabs: [
      { id: "overview", label: "Overview" },
      { id: "itinerary", label: "Itinerary" },
      { id: "packing", label: "Packing" },
      { id: "notes", label: "My Notes" },
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

    init() {
      try {
        const saved = localStorage.getItem("canal-compass-notes");
        if (saved) this.notes = saved;
        const packed = localStorage.getItem("canal-compass-packing");
        if (packed) this.checkedPacking = JSON.parse(packed);
      } catch { /* defaults */ }

      const today = new Date();
      const tripStart = new Date("2026-07-07");
      const tripEnd = new Date("2026-07-16");
      if (today >= tripStart && today <= tripEnd) {
        const dayNum = Math.floor((today - tripStart) / 86400000) + 1;
        this.activeDay = Math.min(Math.max(dayNum, 1), 10);
      }
    },

    selectDay(n) {
      this.activeDay = n;
      this.activeTab = "itinerary";
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
  };
}
