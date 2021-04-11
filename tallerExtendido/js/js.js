document.addEventListener("DOMContentLoaded", function () {
  let i = 0;
  let listaColores = [
    "#1ABC9C",
    "#3498DB",
    "#9B59B6",
    "#E67E22",
    "#E74C3C",
    "#D9A81D",
  ];
  document.querySelectorAll(".cajitas-iconos-pribarra").forEach((input) => {
    input.style.backgroundColor = listaColores[i];
    i++;
  });
  Portfolio.typeAnimation();
  iniciarGrafica1();
  iniciarGrafica2();
  iniciarGrafica3();
});

function iniciarGrafica1() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Red", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
  });
}
function iniciarGrafica2() {
  var ctx = document.getElementById("myChart2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Red", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [3, 2, 5, 12],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
  });
}

function iniciarGrafica3() {
  var ctx = document.getElementById("myChart3").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Red", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [5, 3, 12, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
  });
}

const Portfolio = (function () {
  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "H-H-H...Here we go!",
        "So they're finally here, performing for you.",
        "If you know the words, you can join in too.",
        "Put your hands together if you want to clap.",
        "As we take you through this fun-ky rap! HUH!",
        "D. K.! Donkey Kong!",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 0.1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "rgb(228, 228, 228)",
          "background-color": "transparent",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    typeAnimation: typeAnimation,
  };
})();
