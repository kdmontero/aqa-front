import { PrivateAPI } from "../base"

const getAllQuotations = () => {
  return PrivateAPI.get("api/quotations/")
}

const getQuotationById = (id: number) => {
  return PrivateAPI.get(`api/quotations/${id}/`)
}