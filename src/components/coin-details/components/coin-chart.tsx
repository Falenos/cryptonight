import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CircularProgress } from "@mui/material";
import SelectButton from "./select-button";
import { HistoricalChart } from "../../../../config/api";
import * as S from "../styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  coin: CoinFetchData;
};

const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "14 Days",
    value: 14,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
  {
    label: "All",
  },
];

const CoinChart = ({ coin }: Props) => {
  const [historicData, setHistoricData] = useState<number[][]>([]);
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    const fetchHistoricData = async () => {
      const res = await fetch(HistoricalChart(coin.id, days || "max"));
      const data: CoinsFetchMarketChart = await res.json();
      setflag(true);
      setHistoricData(data.prices);
    };

    fetchHistoricData();
  }, [coin.id, days]);

  return (
    <S.CoinChart>
      <S.Label variant='h4'>Price Action</S.Label>
      {!historicData || flag === false ? (
        <CircularProgress style={{ color: "gold" }} thickness={1} />
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                const date = new Date(coin[0]);
                const time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days )`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}>
            {chartDays.map((selection) => (
              <SelectButton
                key={selection.label}
                onClick={() => {
                  setDays(selection.value || 0);
                  setflag(false);
                }}
                selected={selection.value === days}>
                <>{selection.label}</>
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </S.CoinChart>
  );
};

export default CoinChart;
