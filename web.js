function calculate() {
    let typeCost = parseInt(document.getElementById('type').value) || 0;
    let domainCost = parseInt(document.getElementById('domain').value) || 0;
    let serverCost = parseInt(document.getElementById('server').value) || 0;
    let pageCountCost = parseInt(document.getElementById('pageInput').value) * 1000 || 0; // 假设每页1000円
    let photosCost = parseInt(document.getElementById('photos').value) || 0;
    let contentPlanCost = parseInt(document.getElementById('contentPlan').value) || 0;
    let cmsCost = parseInt(document.getElementById('cms').value) || 0;
    let smartphoneCost = parseInt(document.getElementById('smartphone').value) || 0;
    let seoCost = parseInt(document.getElementById('seo').value) || 0;
    let publishTimeCost = parseInt(document.getElementById('publishTime').value) || 0;

    let totalCost = typeCost + domainCost + serverCost + pageCountCost + photosCost + contentPlanCost + cmsCost + smartphoneCost + seoCost + publishTimeCost;
    document.querySelector('#result span').textContent = totalCost;
}

function selectOption(elementId, value, nextElementId) {
    // 设置选中的值
    let selectedValue = document.createElement('input');
    selectedValue.type = 'hidden';
    selectedValue.id = elementId + 'Value';
    selectedValue.value = value;
    document.body.appendChild(selectedValue);

    // 隐藏当前选项并显示下一个选项
    document.getElementById(elementId).style.display = 'none';
    if (nextElementId) {
        document.getElementById(nextElementId).style.display = 'block';
    }

    // 实时更新费用
    calculate();
}