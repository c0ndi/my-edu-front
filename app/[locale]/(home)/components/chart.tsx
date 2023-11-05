"use client"

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type Props = {}

const data = [
  {
    name: "Jan",
    total: 1000,
  },
  {
    name: "Feb",
    total: 1110,
  },
  {
    name: "Mar",
    total: 500,
  },
  {
    name: "Apr",
    total: 2400,
  },
  {
    name: "May",
    total: 3000,
  },
  {
    name: "Jun",
    total: 2100,
  },
  {
    name: "Jul",
    total: 4420,
  },
  {
    name: "Aug",
    total: 4500,
  },
  {
    name: "Sep",
    total: 3800,
  },
  {
    name: "Oct",
    total: 5000,
  },
  {
    name: "Nov",
    total: 4000,
  },
  {
    name: "Dec",
    total: 6200,
  },
]

export default function Chart({ }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#E54141" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}