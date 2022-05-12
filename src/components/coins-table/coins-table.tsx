import React, { useState } from "react";
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
import { formatNumber, hasItems, fetchRetry } from "../../utils";
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

  const fetchCoins = async (batch: number) => {
    setLoading(true);
    const response = await fetchRetry(CoinList(batch));
    const data = await response.json();

    setCoins(coins.concat(data));
    setLoading(false);
  };

  const handleSearch = (event: { target: { value: string } } | undefined) => {
    const searchVal = event?.target.value || "";
    if (searchVal !== search) setPage(1);
    setSearch(searchVal);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    triggerChecks(value);
    window.scroll(0, 450);
  };

  const getCoins = () =>
    coins.filter(
      (coin: MarketsFetchData) =>
        (coin.name?.toLowerCase() || "").includes(search) ||
        (coin.symbol?.toLowerCase() || "").includes(search)
    );

  const getVisibleCoins = () => getCoins().slice((page - 1) * 10, page * 10);

  const triggerChecks = (page: number) => {
    const maxPage: number = hasItems(prefetchedData) ? coins.length / 10 : 10;
    if (page >= maxPage - 1) {
      fetchCoins(maxPage / 10 + 1);
    }
  };

  const getPageCount = () => parseInt((getCoins().length / 10).toFixed(0));

  return (
    <Container style={{ textAlign: "center" }} maxWidth='xl'>
      <Typography variant='h4' style={{ margin: 18, fontFamily: "Montserrat" }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label='Search For a Crypto Currency. (Works only on the fetched coins)'
        variant='outlined'
        style={{ marginBottom: 20, width: "100%" }}
        onChange={handleSearch}
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
              {getVisibleCoins().map((row: MarketsFetchData) => {
                const isUp = row.price_change_percentage_24h > 0;
                return (
                  <S.TableRow
                    onClick={() => router.push(`/${row.id}`)}
                    key={row.name + search}>
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
                      {"$"} {formatNumber(row.current_price, 2)}
                    </TableCell>
                    <TableCell align='right'>
                      {"$"} {formatNumber(row?.high_24h, 2)}
                    </TableCell>
                    <TableCell align='right'>
                      {"$"} {formatNumber(row.low_24h, 2)}
                    </TableCell>
                    <S.TableCell
                      align='right'
                      className={`price-${isUp ? "up" : "down"}`}>
                      {isUp && "+"}
                      {formatNumber(row.price_change_percentage_24h, 2)}%
                    </S.TableCell>
                    <TableCell align='right'>
                      {"$"}{" "}
                      {formatNumber(row.market_cap.toString().slice(0, -6))}M
                    </TableCell>
                  </S.TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <S.Pagination count={getPageCount()} onChange={handlePageChange} />
    </Container>
  );
};

export default CoinsTable;
