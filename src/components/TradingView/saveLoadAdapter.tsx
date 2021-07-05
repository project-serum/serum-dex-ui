const CHARTS_KEY = 'tradingviewCharts';
const STUDIES_KEY = 'tradingviewStudies';

// See https://github.com/tradingview/charting_library/wiki/Widget-Constructor#save_load_adapter

export function getAllCharts() {
  // @ts-ignore
  let charts = JSON.parse(localStorage.getItem(CHARTS_KEY)) || [];
  return new Promise((resolve) => resolve(charts));
}

export function removeChart(chartId) {
  // @ts-ignore
  let charts = JSON.parse(localStorage.getItem(CHARTS_KEY)) || [];
  charts = charts.filter((chart) => chart.id !== chartId);
  localStorage.setItem(CHARTS_KEY, JSON.stringify(charts));
  localStorage.removeItem(CHARTS_KEY + '.' + chartId);
  return new Promise<void>((resolve) => resolve());
}

export function saveChart(chartData) {
  let { content, ...info } = chartData;
  if (!info.id) {
    info.id = 'chart' + Math.floor(Math.random() * 1e8);
  }
  // @ts-ignore
  info.timestamp = new Date() - 0;
  content = JSON.parse(content);
  content['content'] = JSON.parse(content['content']);
  // Remove "study_Overlay" i.e the indexes
  try {
    for (
      var i = 0;
      i < content['content']['charts'][0]['panes'][0]['sources'].length;
      i++
    ) {
      if (
        content['content']['charts'][0]['panes'][0]['sources'][i]['type'] ===
        'study_Overlay'
      ) {
        content['content']['charts'][0]['panes'][0]['sources'].splice(i, 1);
      }
    }
  } catch (err) {
    console.log(err);
  }
  content['content'] = JSON.stringify(content['content']);
  content = JSON.stringify(content);
  // @ts-ignore
  let charts = JSON.parse(localStorage.getItem(CHARTS_KEY)) || [];
  charts = charts.filter((chart) => chart.id !== info.id);
  charts.push(info);
  localStorage.setItem(CHARTS_KEY, JSON.stringify(charts));
  localStorage.setItem(CHARTS_KEY + '.' + info.id, content);

  return new Promise((resolve) => resolve(info.id));
}

export function getChartContent(chartId) {
  let content = localStorage.getItem(CHARTS_KEY + '.' + chartId);
  return new Promise((resolve) => resolve(content));
}

export function getAllStudyTemplates() {
  // @ts-ignore
  let studies = JSON.parse(localStorage.getItem(STUDIES_KEY)) || [];
  return new Promise((resolve) => resolve(studies));
}

export function removeStudyTemplate({ name }) {
  // @ts-ignore
  let studies = JSON.parse(localStorage.getItem(STUDIES_KEY)) || [];
  studies = studies.filter((study) => study.name !== name);
  localStorage.setItem(STUDIES_KEY, JSON.stringify(studies));
  localStorage.removeItem(STUDIES_KEY + '.' + name);
  return new Promise((resolve) => resolve());
}

export function saveStudyTemplate({ content, ...info }) {
  // @ts-ignore
  let studies = JSON.parse(localStorage.getItem(STUDIES_KEY)) || [];
  studies = studies.filter((study) => study.name !== info.name);
  studies.push(info);
  localStorage.setItem(STUDIES_KEY, JSON.stringify(studies));
  localStorage.setItem(STUDIES_KEY + '.' + info.name, content);
  return new Promise((resolve) => resolve());
}

export function getStudyTemplateContent({ name }) {
  let content = localStorage.getItem(STUDIES_KEY + '.' + name);
  return new Promise((resolve) => resolve(content));
}
