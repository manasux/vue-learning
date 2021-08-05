Vue.createApp({
  data() {
    return {
      heroSelect: "",
      avengerSelect: [],
      myDynamic: "",
      myBonds: [
        {
          text: "James Bond",
          value: 7,
        },
        {
          text: "Jammie Bond",
          value: 8,
        },
        {
          text: "Valery Bond",
          value: 9,
        },
      ],
    };
  },
}).mount("#vapp");
