export const ANNOUNCER_FLOW = {
  offenseSetUp: {
    text: "Place Roster Players in the Offensive starting positions.",
    next: "defenseSetUp"
  },
  defenseSetUp: {
    text: "Place Roster Players anywhere as Defensive positions.",
    next: "playGame"
  }
}