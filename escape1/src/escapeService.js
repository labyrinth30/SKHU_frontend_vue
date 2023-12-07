import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export async function loadEscapes() {
  try {
    const response = await axios.get("/escapes");
    return response.data;
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

export async function loadEscape(id) {
  try {
    const response = await axios.get("/escapes/" + id);
    return response.data;
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

export async function updateEscape(escape) {
  try {
    await axios.put("/escapes/" + escape.id, escape);
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

export async function insertEscape(escape) {
  try {
    await axios.post("/escapes", escape);
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}
export async function deleteEscape(id) {
  try {
    await axios.delete("/escapes/" + id);
  } catch (error) {
    alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
  }
}


