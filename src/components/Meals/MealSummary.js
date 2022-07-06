import React from "react";

import classes from "./MealSummary.module.css";

function MealSummary() {
  return (
    <section className={classes.summary}>
      <h2>美味外送到家</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium
        vulputate lorem lacinia dignissim. Suspendisse at ipsum ullamcorper,
        vehicula libero rutrum, tristique lacus. Donec in est metus. Donec
        rutrum arcu eget mauris finibus aliquet ut vestibulum erat. Quisque
        blandit semper massa, sed ultrices turpis elementum eu. Mauris rhoncus
        lectus lectus, id viverra felis ultricies a. Maecenas purus libero,
        convallis porta lacinia sit amet, faucibus sit amet ante. Aenean id
        risus gravida, tincidunt ligula a, rutrum arcu.
      </p>
    </section>
  );
}

export default MealSummary;
