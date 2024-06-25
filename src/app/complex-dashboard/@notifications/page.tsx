import React from "react";
import Card from "../../../components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h3>Notifications</h3>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
