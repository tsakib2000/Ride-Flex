/* eslint-disable react/prop-types */
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";


const CarChart = ({data}) => {
    return (
        <div className="flex justify-center items-center  my-10">
<BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="carModel" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="dailyRentalPrice" fill="#8884d8" />
</BarChart>
        </div>
    );
};

export default CarChart;