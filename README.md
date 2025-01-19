# ade-planning-api

<p align="center">
  <img alt="Version" src="https://img.shields.io/npm/v/ade-planning-api?style=for-the-badge">
  <img alt="Downloads" src="https://img.shields.io/npm/dy/ade-planning-api?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/github/license/ilo80/ade-planning-api?style=for-the-badge">
</p>

An unofficial wrapper written in TypeScript for interacting with ADE Planning API from Adesoft.

> [!important]
> This package is unofficial and in no way affiliated with [Adesoft](https://www.adesoft.com/) company. Use it at your own risk.

## 📥 Downloads
You can install the `ade-planning-api` package via npm. Simply run the following command :
```bash
npm install ade-planning-api
```

## ⚙️ Uses
### Retrieve projects
```ts
import { ADEPlanningAPI } from 'ade-planning-api';

const main = async () => {
    const api = new ADEPlanningAPI("https://example.com");

    await api.initializeSession({ username: "username", password: "password" });

    const projects = await api.getProjects(); // Get all projects

    console.log(projects);

};

main();
```
### Retrieve events at a specified Date
```ts
import { ADEPlanningAPI } from 'ade-planning-api';

export const main = async () => {
    const api = new ADEPlanningAPI("https://example.com");

    await api.initializeSession({ username: "username", password: "password" });

    const projets = await api.getProjects(); // Get all projects
    await api.setProject(projets[0]); // Set to the first project

    const events = await api.getEvents({ date: "1/19/2025", detail: 8 }); // Get all events for a specific date

    console.log(events);
};

main();
```

## 🙏 Acknowledgement 
Many thanks to [s-celles](https://github.com/s-celles/) for documenting ADE Planning's internal API in the [pyade](https://github.com/s-celles/pyade) package.

## 📜 License
This project is distribued under the [GPL-3.0 license](https://github.com/ilo80/ade-planning-api?tab=GPL-3.0-1-ov-file).
