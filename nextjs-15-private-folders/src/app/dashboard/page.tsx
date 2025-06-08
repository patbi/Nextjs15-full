import LineChart from "./line-chart";

export function BarChart() {
	return <h1>Bar chart</h1>;
}

export default function Dashboard() {
	return(
		<>
			<h1>Dashboard</h1>
			<BarChart />
			<LineChart />
		</>
	) 
}