import React, { useEffect, useState } from "react";
import {
  Container,
  TableCell,
  LinearProgress,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import CoinsTableStyled, {
  TableRowStyled,
  TableCellStyled,
  TableHeadCell,
  PaginationStyled,
} from "./CoinsTableStyled";
import { CoinList } from "../../config/api";
import Image from "next/image";

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable({
  prefetchedData,
}: {
  prefetchedData: { name: string; symbol: string }[];
}) {
  const [coins, setCoins] = useState(prefetchedData);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // const history = useHistory();

  // const fetchCoins = async () => {
  //   setLoading(true);
  //   const response = await fetch(CoinList());
  //   const data = await response.json();
  //   // console.log(data.length);

  //   setCoins(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   console.log('USE EFFECT')
  //   fetchCoins();
  // }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin: { name: string; symbol: string }) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Typography variant='h4' style={{ margin: 18, fontFamily: "Montserrat" }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label='Search For a Crypto Currency..'
        variant='outlined'
        style={{ marginBottom: 20, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table aria-label='simple table'>
            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
              <TableRow>
                {[
                  "Coin",
                  "Price",
                  "24h High",
                  "24h Low",
                  "24h Change",
                  "Market Cap",
                ].map((head) => (
                  <TableHeadCell
                    key={head}
                    align={head === "Coin" ? "inherit" : "right"}>
                    {head}
                  </TableHeadCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleSearch()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((row: any) => {
                  const isUp = row.price_change_percentage_24h > 0;
                  return (
                    <TableRowStyled
                      // onClick={() => history.push(`/coins/${row.id}`)}
                      key={row.name}>
                      <TableCell
                        component='th'
                        scope='row'
                        style={{
                          display: "flex",
                          gap: 15,
                        }}>
                        <Image
                          src={row?.image}
                          alt={row.name}
                          width='50'
                          height='50'
                          style={{ marginBottom: 10 }}
                        />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontSize: 22,
                            }}>
                            {row.symbol}
                          </span>
                          <span style={{ color: "darkgrey" }}>{row.name}</span>
                        </div>
                      </TableCell>
                      <TableCell align='right'>
                        {"$"} {numberWithCommas(row.current_price.toFixed(2))}
                      </TableCell>
                      <TableCell align='right'>
                        {"$"} {numberWithCommas(row.high_24h.toFixed(2))}
                      </TableCell>
                      <TableCell align='right'>
                        {"$"} {numberWithCommas(row.low_24h.toFixed(2))}
                      </TableCell>
                      <TableCellStyled
                        align='right'
                        className={`price-${isUp ? "up" : "down"}`}>
                        {isUp && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCellStyled>
                      <TableCell align='right'>
                        {"$"}{" "}
                        {numberWithCommas(
                          row.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </TableCell>
                    </TableRowStyled>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <PaginationStyled
        count={parseInt((handleSearch()?.length / 10).toFixed(0))}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
}
