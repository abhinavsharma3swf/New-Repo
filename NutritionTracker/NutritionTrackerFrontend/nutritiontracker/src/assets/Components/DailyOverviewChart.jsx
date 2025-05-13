
import { Chart } from "react-google-charts";
import {useLocation} from "react-router-dom";


// export const DailyOverviewChart = ({ totals }) => {
//     const data = [
//         { label: 'Protein', value: totals.protein},
//         { label: 'Carbs', value: totals.carbs},
//         { label: 'Fats', value: totals.fat},
//     ];
//
//     const colors = ['#1e7867', '#b88518', '#e10c0c' ]
//
//     // const sizing = {
//     //     margin: { right: 5 },
//     //     width: 250,
//     //     height: 250,
//     //     legend: { hidden: true },
//     // };
//
//     const sepValue = data.map((el) => el.value);
//     console.log(sepValue)
//
//     return (
//         <PieChart width={700} height={700}>
//             <Pie
//                 // activeIndex={activeIndex}
//                 data={data}
//                 dataKey="students"
//                 outerRadius={250}
//                 fill="green"
//                 // onMouseEnter={onPieEnter}
//                 style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus
//             >
//                 {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//                 ))}
//             </Pie>
//             <Tooltip />
//         </PieChart>
//     );
// };

export function DailyOverviewChart() {

    const location = useLocation();
    const {totals} = location.state;

    // console.log(totals.fat)
    const data = [
        ["Macros", "Grams"],
        ["Fat", totals.fat],
        ["Carbs", totals.carbs],
        ["Protein", totals.protein]
    ];
    console.log(totals)
    const options = {
        title: "My Daily Overview",
        colors: ["#e57373", "#64b5f6", "#81c784"],

    };
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
}