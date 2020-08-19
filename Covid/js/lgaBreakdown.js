// Our labels along the x-axis
Chart.defaults.global.defaultFontColor = "#000";

var LGA = [
  "Aniocha North",
  "Aniocha South",
  "Bomadi",
  "Burutu",
  "Ethiope East",
  "Ethiope West",
  "Ika NorthEast",
  "Ika South",
  "Isoko North",
  "Isoko South",
  "Ndokwa East",
  "Ndokwa West",
  "Okpe",
  "Oshimili North",
  "Oshimili South",
  "Patani",
  "Sapele",
  "Udu",
  "Ughelli North",
  "Ughelli South",
  "Ukwuani",
  "Uvwie",
  "Warri North",
  "Warri South",
  "Warri SouthWest",
];
// For drawing the lines
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: LGA,

    datasets: [
      {
        label: "Total Persons Tested",
        data: [
          15,
          45,
          21,
          1,
          71,
          265,
          70,
          108,
          15,
          66,
          8,
          116,
          127,
          474,
          1862,
          3,
          344,
          179,
          341,
          47,
          21,
          442,
          5,
          516,
          4,
        ],
        backgroundColor: [
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
          "#9400D3",
        ],
      },
      {
        label: "Tests per 100,000 population",
        data: [
          10,
          23,
          17,
          0,
          25,
          93,
          27,
          46,
          7,
          20,
          6,
          55,
          71,
          285,
          885,
          3,
          141,
          90,
          76,
          16,
          13,
          167,
          3,
          118,
          2,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
          "rgba(255, 99, 132, 3)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
