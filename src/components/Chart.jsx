import React, { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Brush,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO, startOfWeek, startOfMonth, getWeek } from "date-fns";

const formatData = (data, timeframe) => {
  if (timeframe === "daily") {
    return data.map((item) => ({
      ...item,
      timestamp: format(parseISO(item.timestamp), "yyyy-MM-dd"),
    }));
  }

  const aggregateData = (dateFn, formatString) => {
    const aggregated = data.reduce((acc, current) => {
      const date = dateFn(parseISO(current.timestamp));
      const time = date.getTime();
      if (!acc[time]) {
        acc[time] = { timestamp: date, value: 0, count: 0 };
      }
      acc[time].value += current.value;
      acc[time].count += 1;
      return acc;
    }, {});

    return Object.values(aggregated).map((item) => ({
      timestamp: format(item.timestamp, formatString),
      value: item.value / item.count,
    }));
  };

  if (timeframe === "weekly") {
    return aggregateData(startOfWeek, "yyyy-'W'II");
  }

  if (timeframe === "monthly") {
    return aggregateData(startOfMonth, "yyyy-MM");
  }

  return data;
};

const Chart = ({ data, timeframe }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const formattedData = formatData(data, timeframe);

  const getTickFormatter = (timeframe) => {
    if (timeframe === "daily") {
      return (tick) => format(parseISO(tick), "dd MMM");
    }
    if (timeframe === "weekly") {
      return (tick) => `W${getWeek(parseISO(tick))}`;
    }
    if (timeframe === "monthly") {
      return (tick) => format(parseISO(tick), "MMM yyyy");
    }
    return (tick) => tick;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = formattedData.filter((item) =>
    item.timestamp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5 flex justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center mt-8 mb-5">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-1 mb-3 "
          />
        </div>
        <ResponsiveContainer width="95%" height={400}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={getTickFormatter(timeframe)}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" />
            <Brush
              dataKey="timestamp"
              height={30}
              stroke="#3b82f6"
              className="stroke-blue-500"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
