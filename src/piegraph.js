import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class Graph1 extends React.Component {
    COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF", "#98E4FF"];
    pieData = [
        {
            name: "Latinx",
            value: 10
        },
        {
            name: "Native Hawaiian",
            value: 10
        },
        {
            name: "White",
            value: 25
        },
        {
            name: "Asian",
            value: 15
        },
        {
            name: "Black",
            value: 20
        },
        {
            name: "American Indian",
            value: 20
        }
    ];
    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };
    render() {
        return (
            <PieChart width={650} height={400}>
                <p className="graph-title">Author Distribution</p>
                <Pie
                    data={this.pieData}
                    color="#000000"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                >
                    {this.pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={this.COLORS[index % this.COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        );
    }
}
export default Graph1;