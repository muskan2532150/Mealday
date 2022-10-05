/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.harvardartmuseums.org/image?apikey=0b852869-b626-44de-bf16-6564d4ba2270';

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
  SUCCESS: 'success',
});

export const ContainerSlice = createSlice({
  name: 'container',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },
    // missionChange: (state, action) => {
    //   state.data = state.data.map((mission) => {
    //     if (mission.mission_id !== action.payload) return mission;
    //     return { ...mission, mission: !mission.mission };
    //   });
    // },
  },
});

export const { getdata, setStatus } = ContainerSlice.actions;

export default ContainerSlice.reducer;

// Thunks

export function fetchdata() {
  return async function fetchdataThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      const array = [];
      Object.values(data)[1].forEach(records => array.push({
        // id: records.id,
        // label: records.labeltext,
        // url: records.url,
        // name: records.name,
        // lastupdate: records.lastupdate,
        // theme: records.theme,
        // galleryid: records.galleryid

        date:records.date,
        copyright:records.copyright,
        id:records.imageid,
        technique: records.technique,
        url:records.baseimageurl,
format:records.format,
iiifbaseurl:records.iiifbaseuri,

      }));
      dispatch(getdata(array));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}