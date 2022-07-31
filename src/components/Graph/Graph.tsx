import React from 'react'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

interface GraphProps {
  correct: number
  incorrect: number
}

const Graph: React.FC<GraphProps> = ({ correct, incorrect }) => {
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Final Result',
        data: [correct, incorrect],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
      },
    ],
  }
  return <Doughnut data={data} />
}

export default Graph
