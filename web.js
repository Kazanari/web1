function calculate() {
    let typeCost = parseInt(document.getElementById('type').value);
    let domainCost = parseInt(document.getElementById('domain').value);
    let serverCost = parseInt(document.getElementById('server').value);
    let pageCountCost = parseInt(document.getElementById('pageCount').value) * 1000; // 假设每页1000円
    let photosCost = parseInt(document.getElementById('photos').value);
    let contentPlanCost = parseInt(document.getElementById('contentPlan').value);
    let cmsCost = parseInt(document.getElementById('cms').value);
    let smartphoneCost = parseInt(document.getElementById('smartphone').value);
    let seoCost = parseInt(document.getElementById('seo').value);
    let publishTimeCost = parseInt(document.getElementById('publishTime').value);

    let totalCost = typeCost + domainCost + serverCost + pageCountCost + photosCost + contentPlanCost + cmsCost + smartphoneCost + seoCost + publishTimeCost;
    document.querySelector('#result span').textContent = totalCost;
}
