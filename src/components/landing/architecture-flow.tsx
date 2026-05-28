"use client";

import ReactFlow, {
  Background,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  type Edge,
  type Node,
  type NodeProps
} from "reactflow";
import { Code2, Database, Globe2, KeyRound, Layers3, ServerCog, ShieldCheck } from "lucide-react";

type FlowData = {
  label: string;
  description: string;
  tone: "blue" | "violet" | "red";
};

const toneClass = {
  blue: "border-[#3b3a50]/18 bg-white text-[#3b3a50]",
  violet: "border-[#2de29d]/70 bg-[#2de29d]/16 text-[#3b3a50]",
  red: "border-red-400/30 bg-red-500/8 text-[#3b3a50]"
};

function ArchitectureNode({ data }: NodeProps<FlowData>) {
  return (
    <div className={`min-w-44 rounded-md border px-4 py-3 shadow-[0_18px_40px_rgba(59,58,80,0.08)] backdrop-blur-xl ${toneClass[data.tone]}`}>
      <Handle type="target" position={Position.Left} className="!border-white !bg-[#2de29d]" />
      <p className="text-sm font-semibold">{data.label}</p>
      <p className="mt-1 text-xs leading-5 text-[#3b3a50]/58">{data.description}</p>
      <Handle type="source" position={Position.Right} className="!border-white !bg-[#2de29d]" />
    </div>
  );
}

const nodeTypes = { architecture: ArchitectureNode };

const nodes: Node<FlowData>[] = [
  { id: "frontend", type: "architecture", position: { x: 0, y: 115 }, data: { label: "Frontend", description: "Routes and UI", tone: "blue" } },
  { id: "router", type: "architecture", position: { x: 245, y: 50 }, data: { label: "App Router", description: "Pages and metadata", tone: "blue" } },
  { id: "auth", type: "architecture", position: { x: 245, y: 185 }, data: { label: "Auth Boundary", description: "Policy checks", tone: "red" } },
  { id: "api", type: "architecture", position: { x: 500, y: 115 }, data: { label: "API Layer", description: "Contracts", tone: "violet" } },
  { id: "services", type: "architecture", position: { x: 750, y: 50 }, data: { label: "Services", description: "Business logic", tone: "violet" } },
  { id: "db", type: "architecture", position: { x: 750, y: 185 }, data: { label: "Database", description: "Models and indexes", tone: "blue" } },
  { id: "seo", type: "architecture", position: { x: 1010, y: 115 }, data: { label: "SEO + Cache", description: "Production surface", tone: "red" } }
];

const edges: Edge[] = [
  { id: "frontend-router", source: "frontend", target: "router", animated: true },
  { id: "frontend-auth", source: "frontend", target: "auth", animated: true },
  { id: "router-api", source: "router", target: "api", animated: true },
  { id: "auth-api", source: "auth", target: "api", animated: true },
  { id: "api-services", source: "api", target: "services", animated: true },
  { id: "api-db", source: "api", target: "db", animated: true },
  { id: "services-seo", source: "services", target: "seo", animated: true },
  { id: "db-seo", source: "db", target: "seo", animated: true }
].map((edge) => ({
  ...edge,
  markerEnd: { type: MarkerType.ArrowClosed, color: "#3b3a50" },
  style: { stroke: "#3b3a50", strokeWidth: 1.5 }
}));

export function ArchitectureFlow() {
  return (
    <div className="relative h-[520px] overflow-hidden border border-[#3b3a50]/14 bg-[#eef1ef]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.45}
        maxZoom={1.2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(59,58,80,0.18)" gap={28} />
        <MiniMap
          nodeColor={(node) => {
            const tone = (node.data as FlowData).tone;
            return tone === "red" ? "#ef4444" : tone === "violet" ? "#2de29d" : "#3b3a50";
          }}
          maskColor="rgba(247,248,246,0.72)"
        />
        <Controls />
      </ReactFlow>
      <div className="pointer-events-none absolute left-4 top-4 hidden gap-2 lg:flex">
        {[Code2, Layers3, KeyRound, ServerCog, Database, Globe2, ShieldCheck].map((Icon, index) => (
          <span key={index} className="flex h-8 w-8 items-center justify-center rounded-md border border-[#3b3a50]/12 bg-white/70 text-[#3b3a50]/62">
            <Icon className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
