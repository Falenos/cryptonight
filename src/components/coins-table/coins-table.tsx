import React, { useEffect, useState } from "react";
import { CoinList } from "../../../config/api";
import { useRouter } from "next/router";
import Image from "next/image";
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
import { numberWithCommas } from "../../utils";
import * as S from "./styled";

const CoinsTable = ({
  prefetchedData,
}: {
  prefetchedData: MarketsFetchData[];
}) => {
  const router = useRouter();
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
      (coin: MarketsFetchData) =>
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
                  <S.TableHeadCell
                    key={head}
                    align={head === "Coin" ? "inherit" : "right"}>
                    {head}
                  </S.TableHeadCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleSearch()
                .slice((page - 1) * 10, page * 10)
                .map((row: MarketsFetchData) => {
                  const isUp = row.price_change_percentage_24h > 0;
                  return (
                    <S.TableRow
                      onClick={() => router.push(`/${row.id}`)}
                      key={row.name}>
                      <S.TableCellMain component='th' scope='row'>
                        <Image
                          src={row?.image}
                          alt={row.name}
                          width='50'
                          height='50'
                        />
                        <div className='coin-info-wrapper'>
                          <span className='symbol'>{row.symbol}</span>
                          <span className='name'>{row.name}</span>
                        </div>
                      </S.TableCellMain>
                      <TableCell align='right'>
                        {"$"} {numberWithCommas(row.current_price.toFixed(2))}
                      </TableCell>
                      <TableCell align='right'>
                        {"$"} {numberWithCommas(row.high_24h.toFixed(2))}
                      </TableCell>
                      <TableCell align='right'>
                        {"$"} {numberWithCommas(row.low_24h.toFixed(2))}
                      </TableCell>
                      <S.TableCell
                        align='right'
                        className={`price-${isUp ? "up" : "down"}`}>
                        {isUp && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </S.TableCell>
                      <TableCell align='right'>
                        {"$"}{" "}
                        {numberWithCommas(
                          row.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </TableCell>
                    </S.TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <S.Pagination
        count={parseInt((handleSearch()?.length / 10).toFixed(0))}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
};

export default CoinsTable;
