'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Topic } from '@/lib/site-data'

const PALETTE = ['#1f9d63', '#2f8fb9', '#5cbf8a', '#3aa6b9', '#7bb661', '#c9a227']

function ChartTooltip({ active, payload, unit }: any) {
  if (!active || !payload?.length) return null
  const item = payload[0]
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-sm shadow-md">
      <p className="font-medium text-foreground">{item.payload.label}</p>
      <p className="text-muted-foreground">
        {item.value} {unit}
      </p>
    </div>
  )
}

export function ThemeChart({ topic }: { topic: Topic }) {
  const { chartType, chartData, chartUnit } = topic

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === 'bar' ? (
          <BarChart data={chartData} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} tickLine={false} axisLine={false} interval={0} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} tickLine={false} axisLine={false} />
            <Tooltip cursor={{ fill: 'var(--muted)' }} content={<ChartTooltip unit={chartUnit} />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
              ))}
            </Bar>
          </BarChart>
        ) : chartType === 'line' ? (
          <LineChart data={chartData} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} tickLine={false} axisLine={false} />
            <Tooltip content={<ChartTooltip unit={chartUnit} />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2f8fb9"
              strokeWidth={3}
              dot={{ r: 4, fill: '#2f8fb9' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        ) : (
          <PieChart>
            <Tooltip content={<ChartTooltip unit={chartUnit} />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={3}
              stroke="var(--background)"
              strokeWidth={2}
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}

export function ChartLegend({ topic }: { topic: Topic }) {
  return (
    <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
      {topic.chartData.map((d, i) => (
        <li key={d.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="size-2.5 rounded-full" style={{ backgroundColor: PALETTE[i % PALETTE.length] }} />
          {d.label}
        </li>
      ))}
    </ul>
  )
}
