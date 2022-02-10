import { useState, useCallback } from "react";
import "../../style/home.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import BackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { addItem } from "../../redux/general/actions";
import { setNotification } from "../../redux/notification/actions";

const defaultItem = { title: "", url: "", point: 0, id: 1 };
const AddItemPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.general.items);
  const [form, setForm] = useState(defaultItem);
  const [error, setError] = useState({});
  
  const returnBack = useCallback(() => history.push("/"), [history]);
  const onSave = useCallback(() => {
    let maxId = 1;
    let error = false;
    if (items.length > 0) {
      const sortItems = items.sort((a, b) => a.id - b.id);
      maxId = sortItems[sortItems.length - 1].id + 1;
    }
    if(!form.title) {
      setError(e => ({...e, title: 'Boş Bırakılamaz'}));
      error = true;
    }
    if(!form.url) {
      setError(e => ({...e, url: 'Boş Bırakılamaz'}));
      error = true;
    }
    if(error) return;
    dispatch(addItem({ ...form, id: maxId }));
    dispatch(
      setNotification({
        title: "Remove Link",
        message: `${form.title} added`
      })
    );
    setForm(defaultItem);
    history.push("/");

  }, [form, items]);

  const onChange = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }))
    setError((f) => ({ ...f, [name]: null }))
  }

  return (
    <main>
      <Stack style={{ width: 350 }} direction="column" spacing={2}>
        <Button
          onClick={returnBack}
          style={{ width: 200, marginBottom: 10 }}
          variant="outlined"
          startIcon={<BackIcon />}
        >
          Return to list
        </Button>
        <h3>Add New Link</h3>
        <TextField
          error={!!error.title}
          id="outlined-name"
          label="Link Name"
          value={form.title}
          helperText={error.title}
          onChange={(event) => onChange('title', event.target.value)}
        />
        <TextField
          error={!!error.url}
          id="outlined-name"
          label="Link URL"
          value={form.url}
          helperText={error.url}
          onChange={(event) => onChange('url', event.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={onSave}
            style={{ width: 150, marginBottom: 30 }}
            variant="outlined"
            startIcon={<SaveIcon />}
          >
            Add
          </Button>
        </div>
      </Stack>
    </main>
  );
}

export default AddItemPage;
