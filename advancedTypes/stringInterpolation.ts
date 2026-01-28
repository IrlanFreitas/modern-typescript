export interface Event {
  type: `${string}Event`;
  read: () => void;
}

export interface Listener {
  type: `${string}Listener`;
  listener: () => void;
}

export function handler( item: Event | Listener) {
  if(item.type === "PushEvent") {
    item.read();
  }
}

handler({
  type: "AlgumaCoisaListener", // * É obrigatório ter Listener ou Event no type por conta da interpolação
  listener: () => {console.log("Listener")}
})
