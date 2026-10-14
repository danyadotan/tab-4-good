import { createFileRoute } from '@tanstack/react-router';
import OperationalRoadmap from '@/pages/OperationalRoadmap';
export const Route = createFileRoute('/roadmap')({ component: OperationalRoadmap });
