//Function For Value Update
function valueUpdate(individualPrice, id) {
  const preValue = document.getElementById(id);
  preValue.innerText = individualPrice;
  costCalc();
}

// Cost Calculation
function costCalc() {
  const bestPriceText = document.getElementById("best-price").innerText;
  const bestPrice = parseFloat(bestPriceText);
  const memoryCostText = document.getElementById("memory-cost").innerText;
  const memoryCost = parseFloat(memoryCostText);
  const storageCostText = document.getElementById("storage-cost").innerText;
  const storageCost = parseFloat(storageCostText);
  const deliveryCostText = document.getElementById("delivery-charge").innerText;
  const deliveryCost = parseFloat(deliveryCostText);

  const total = bestPrice + memoryCost + storageCost + deliveryCost;
  const totalPriceText = document.getElementById("total-price");
  totalPriceText.innerText = total;
  const totalFinalText = document.getElementById("total-final");
  totalFinalText.innerText = total;
}

// Promo Calc
function promoCalc() {
  const getTotalFinal = document.getElementById("total-final");
  const totalFinalText = getTotalFinal.innerHTML;
  const totalFinal = parseFloat(totalFinalText);
  const promoFinal = totalFinal - totalFinal * (20 / 100);
  getTotalFinal.innerHTML = promoFinal;
  promoText.value = "";
}

// 16GB Memory
document.getElementById("16GB").addEventListener("click", function () {
  valueUpdate(180, "memory-cost");
});

// 8GB Memory
document.getElementById("8GB").addEventListener("click", function () {
  valueUpdate(0, "memory-cost");
});

// 256GB Memory
document.getElementById("256GB").addEventListener("click", function () {
  valueUpdate(0, "storage-cost");
});

// 512GB Memory
document.getElementById("512GB").addEventListener("click", function () {
  valueUpdate(100, "storage-cost");
});

// 1TB Memory
document.getElementById("1TB").addEventListener("click", function () {
  valueUpdate(180, "storage-cost");
});

// Free Delivery
document.getElementById("free-delivery").addEventListener("click", function () {
  valueUpdate(0, "delivery-charge");
});

// Paid Delivery
document.getElementById("paid-delivery").addEventListener("click", function () {
  valueUpdate(20, "delivery-charge");
});

// Coupon
document.getElementById("apply").addEventListener("click", function () {
  const promoText = document.getElementById("promo");
  const promoValue = promoText.value;
  if (promoValue == "stevekaku") {
    promoCalc();
  } else {
    costCalc();
    promoText.value = "";
  }
});
