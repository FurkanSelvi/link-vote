import { useMemo, useState, useCallback } from "react";
import "../../style/home.css";
import { useHistory } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ContentItem from "../elements/ContentItem";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function ListPage() {
  let history = useHistory();
  const items = useSelector((state) => state.general.items);

  const toAdd = useCallback(() => history.push("/add"), [history]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(null);

  const onPageChange = (event, newPage) => {
    setPage(newPage);
  };

  const ListMem = useMemo(() => {
    if (items.length > 0) {
      const totalPage = Math.ceil(items.length / 5);
      let filteredItems = items.sort((a, b) => b.id - a.id);
      if(order === 'asc') filteredItems = filteredItems.sort((a, b) => a.point - b.point);
      else if(order === 'desc') filteredItems = filteredItems.sort((a, b) => b.point - a.point);
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order}
              label="Order by"
              onChange={(event) => setOrder(event.target.value)}
            >
              <MenuItem value={"desc"}>Most Voted (Z -> A)</MenuItem>
              <MenuItem value={"asc"}>Less Voted (A -> Z)</MenuItem>
            </Select>
          </FormControl>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {filteredItems
              .slice((page - 1) * 5, page * 5)
              .map((item, i) => (
                <ContentItem key={i} {...item} />
              ))}
          </List>
          <Pagination
            page={page}
            onChange={onPageChange}
            style={{ margin: 15 }}
            count={totalPage}
          />
        </div>
      );
    } else return <div className="empty">Empty</div>;
  }, [items, page, order]);

  return (
    <main>
      <Stack
        style={{ width: 350, marginBottom: 15 }}
        direction="column"
        spacing={2}
      >
        <Button onClick={toAdd} variant="outlined" startIcon={<AddIcon />}>
          Submit A Link
        </Button>
        <hr />
      </Stack>
      {ListMem}
    </main>
  );
}

export default ListPage;
