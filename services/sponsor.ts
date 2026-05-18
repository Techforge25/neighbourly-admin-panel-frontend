import api from "@/lib/axios";
import { CreateSponsor } from "@/types";

export const getSponsors = async (suburb: string, page: number) => {
     try {
          const { data } = await api.get(`/sponsor?suburb=${suburb}&page=${page}`);
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const createSponsor = async (payload: CreateSponsor) => {
     const { businessName, contact, logo, personName, serviceType, suburb } = payload
     try {
          const { data } = await api.post(`/sponsor`, { businessName, contact, logo, personName, serviceType, suburb });
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const editSponsor = async (sponsorId: string, payload: CreateSponsor) => {
     const { businessName, contact, logo, personName } = payload
     try {
          const { data } = await api.patch(`/sponsor/${sponsorId}`, { businessName, contact, logo, personName });
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const viewSponsor = async (sponsorId: string) => {
     console.log(sponsorId, 'sponsor iddd')
     try {
          const { data } = await api.get(`/sponsor/${sponsorId}`);
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const deleteSponsor = async (sponsorId: string) => {
     console.log(sponsorId, 'sponsor iddd')
     try {
          const { data } = await api.delete(`/sponsor/${sponsorId}`);
          return data;
     } catch (err) {
          console.error(err)
     }
}