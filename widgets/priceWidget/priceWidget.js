function getContainers(containerClass) {
  return document.getElementsByClassName(containerClass);
}

async function getDefaultConfig() {
  try {
    const response = await fetch("widgets/priceWidget/defaultConfig.json");
    if (!response.ok) {
      throw new Error(`Failed to load default config: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(err);

    return {
      theme: "light",
      currency: "BTC",
      fiat: "USD",
      refreshInterval: 5000,
    };
  }
}

function getDataAttributes(container, defaultConfig) {
  return {
    theme: container.dataset.theme || defaultConfig.theme,
    currency: container.dataset.currency || defaultConfig.currency,
    fiat: container.dataset.fiat || defaultConfig.fiat,
    refreshInterval:
      parseInt(container.dataset.refreshInterval) ||
      defaultConfig.refreshInterval,
  };
}

function initWidget(container, dataAttributes) {
  const widgetHTML = `
        <h2>${dataAttributes.currency} Price</h2>
        <div class="widget-body">
            <p>Currency: ${dataAttributes.currency}-${dataAttributes.fiat}</p>
            <p>Price: 
                <span class="priceDisplay">
                    Loading
                    <span class="loading-dots">
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </span>
            </p>
            <button class="buyButton">Buy</button>
        </div>
    `;

  container.innerHTML = widgetHTML;

  if (dataAttributes.theme === "dark") {
    container.style.backgroundColor = "#333";
    container.style.color = "#fff";
  } else {
    container.style.backgroundColor = "#fff";
    container.style.color = "#000";
  }

  container.querySelector(".buyButton").addEventListener("click", function () {
    alert(`Buying in ${dataAttributes.currency}`);
  });
}

async function fetchApiData(currency, fiat) {
  try {
    const response = await fetch(
      `https://api.coinbase.com/v2/prices/${currency}-${fiat}/spot`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return parseFloat(data.data.amount).toFixed(2);
  } catch (err) {
    console.error("Fetch failed:", err);
    return null;
  }
}

function updateWidget(container, price) {
  if (price === null) {
    container.querySelector(".priceDisplay").textContent = "N/A";
  } else {
    let currencySymbols = {
      USD: "$",
      EUR: "€",
      HUF: "Ft",
    };
    const symbol = currencySymbols[container.dataset.fiat] || "";
    container.querySelector(".priceDisplay").textContent = price + " " + symbol;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const defaultConfig = await getDefaultConfig();
  const containers = Array.from(getContainers("price-widget"));
  const widgetData = containers.map((container) => ({
    container,
    dataAttributes: getDataAttributes(container, defaultConfig),
  }));

  widgetData.forEach(({ container, dataAttributes }) =>
    initWidget(container, dataAttributes)
  );

  setInterval(() => {
    widgetData.forEach(async ({ container, dataAttributes }) => {
      const price = await fetchApiData(
        dataAttributes.currency,
        dataAttributes.fiat
      );
      updateWidget(container, price);
    });
  }, 2000);
});
