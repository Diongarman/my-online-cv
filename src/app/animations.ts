import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

export const fadeIn = trigger("myInsertRemoveTrigger", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("2s", style({ opacity: 1 })),
  ]),
  transition(":leave", [animate("1s", style({ opacity: 0 }))]),
]);
