import React, { useState } from 'react'

import Chart from "react-apexcharts";
import CImg from '@coreui/icons-react';

import sidebarIcons from 'src/assets';

// import MainChartExample from '../../components/charts/MainChartExample.js'

const Dashboard = () => {

  const [chartType, updateChartType] = useState('line');

  const options = {
    chart: {
      type: 'line',
      id: "chart",
      height: 550,
      toolbar: {
        tools: {
          pan: false,
          zoomin: true,
          zoomout: true,
          zoom: false,
          reset: `<img src=${sidebarIcons.refresh} width="25" alt="Обновить" title="Обновить">`,
          download: `<img src=${sidebarIcons.downloadChart} width="20" alt="Скачать" title="Скачать">`,
          customIcons: [{
            icon: `<img src=${sidebarIcons.barChart} width="25" alt="Столбчатая диаграмма" title="Столбчатая диаграмма">`,
            title: 'Bar chart',
            class: 'custom-icon-bar',
            index: -3,
            click: function(e, chart, options) {
              updateChartType('bar');
            }
          },
          {
            icon: `<img src=${sidebarIcons.lineChart} width="25" alt="Линейная диаграмма" title="Линейная диаграмма">`,
            title: 'Line chart',
            class: 'custom-icon-line',
            index: -3,
            click: function(e, chart, options) {
              updateChartType('line');
            }
          }
          ]
        },
      }
    },
    colors: ['#D12421', '#9CD39B'],
    xaxis: {
      labels: {
        show: false
      },
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      tickPlacement: 'on'
    }
  };
  const series = [{
    name: 'Поездки',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  },
  {
    name: 'Доход',
    data: [40, 45, 50, 59, 39, 70, 80, 101]
  }];


  return (
    <>
      <div className="dashboard-infobars d-flex align-items-center justify-content-ceenter w-100 mb-5 pt-3">
        <div className="card dashboard-infobar p-3 w-100 mr-4">
          <CImg
            src={sidebarIcons.scooter}
            fluid
            alt="Scooter"
          />
          <span className="dashboard-infobar-title mb-2">Транспорт</span>
          <span className="dashboard-infobar-info"> 0</span>
        </div>
        <div className="card dashboard-infobar p-3 w-100 mr-4">
          <CImg
            src={sidebarIcons.clients}
            fluid
            alt="Scooter"
          />
          <span className="dashboard-infobar-title mb-2">Клиенты</span>
          <span className="dashboard-infobar-info">8</span>
        </div>
        <div className="card dashboard-infobar p-3 w-100 mr-4">
          <CImg
            src={sidebarIcons.twoPersons}
            fluid
            alt="Scooter"
          />
          <span className="dashboard-infobar-title mb-2">Пользователи</span>
          <span className="dashboard-infobar-info">0</span>
        </div>
      </div>
      <div className="card adminLteCustomTable">
        <div className="chart-box p-4">
          <div id="chart">
            <Chart
              options={options}
              series={series}
              type={chartType}
              height="500"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
