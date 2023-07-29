import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = (props) => {
  console.log(props);
  const ways = props.routes.map((route) => L.latLng(route[0], route[1]));
  console.log(ways);
  const instance = L.Routing.control({
    position: "topright",
    waypoints: ways,
    showAlternatives: true,
    lineOptions: {
      styles: [
        {
          color: "black",
          opacity: 0.15,
          weight: 9,
        },
        {
          color: "white",
          opacity: 0.8,
          weight: 6,
        },
        {
          color: "blue",
          opacity: 0.5,
          weight: 2,
        },
      ],
    },
  });

  return instance;
};

// Pass our createRoutingMachineLayer to the createControlHook:
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// Export
export default RoutingMachine;
