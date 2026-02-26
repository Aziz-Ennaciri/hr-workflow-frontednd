'use client'

import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  

  useEffect(() => {
    console.log(params.id) }, [params.id])

  return <div>Offres numero: {params.id}</div>
}