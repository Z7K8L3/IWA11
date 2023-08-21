// script.js

const dlOrders = document.querySelectorAll("[data-key]")

dlOrders.forEach(dlOrders => {
  const biscuitsElement = dlOrders.querySelector(".biscuits .count")
  const donutsElement = dlOrders.querySelector(".donuts .count")
  const pancakesElement = dlOrders.querySelector(".pancakes .count")
  const statusElement = dlOrders.querySelector(".status dd")

  const biscuitsCount = dlOrders.getAttribute("data-biscuits")
  const donutsCount = dlOrders.getAttribute("data-donuts")
  const pancakesCount = dlOrders.getAttribute("data-pancakes")
  const delivered = dlOrders.getAttribute("data-delivered")

  biscuitsElement.textContent = biscuitsCount
  donutsElement.textContent = donutsCount
  pancakesElement.textContent = pancakesCount
  statusElement.textContent = delivered === "true" ? "Delivered" : "Pending"
})

//Other way

// const order1 = document.querySelector("[data-key='order1']");
// const biscuits1 = order1.querySelector(".biscuits .count");
// const donuts1 = order1.querySelector(".donuts .count");
// const pancakes1 = order1.querySelector(".pancakes .count");
// const status1 = order1.querySelector(".status dd");

// biscuits1.textContent = order1.getAttribute("data-biscuits");
// donuts1.textContent = order1.getAttribute("data-donuts");
// pancakes1.textContent = order1.getAttribute("data-pancakes");
// status1.textContent = order1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";
