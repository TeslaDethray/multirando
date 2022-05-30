import { Container } from "@pantheon-systems/design-toolkit-react";
import React, { useState } from "react"
import '@pantheon-systems/design-toolkit-react/dist/index.css';

import { CSVImporter } from "../components";

export default function Home() {

  return (
    <Container>
      <CSVImporter id="csv-import" />
    </Container>
  );
}
