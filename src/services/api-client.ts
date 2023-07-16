import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "4c67b85a6713488ab7265dae79bab841"
  }
})