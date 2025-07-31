import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Activity, AlertTriangle, Play, Pause, Gauge, FileText } from "lucide-react";

function formatSpeed(speed) {
  return speed > 0 ? `${speed} RPM` : "0 RPM";
}

function getStatusColor(status) {
  switch (status) {
    case 'working': return 'bg-success text-black';
    case 'idle': return 'bg-warning text-black';
    case 'emergency': return 'bg-error text-white';
    default: return 'bg-gray-500 text-white';
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'working': return Play;
    case 'idle': return Pause;
    case 'emergency': return AlertTriangle;
    default: return Activity;
  }
}

export default function MachineMonitoring() {
  const { data: machines, isLoading } = useQuery({
    queryKey: ['/api/machines'],
    queryFn: async () => {
      const response = await fetch('/api/machines');
      if (!response.ok) throw new Error('Failed to fetch machines');
      return response.json();
    },
    refetchInterval: 5000,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Monitorowanie Maszyn</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-card animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-8 bg-muted rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!machines || machines.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Monitorowanie Maszyn</h1>
        <Card className="bg-card">
          <CardContent className="p-6 text-center">
            <Activity className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Brak dostępnych maszyn do monitorowania</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const workingMachines = machines.filter(m => m.status === 'working').length;
  const idleMachines = machines.filter(m => m.status === 'idle').length;
  const emergencyMachines = machines.filter(m => m.status === 'emergency').length;
  const totalFiles = machines.reduce((sum, m) => sum + m.filesCompleted, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Monitorowanie Maszyn</h1>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Aktualizacja co 5s</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Maszyny w Pracy</p>
                <p className="text-2xl font-bold text-success">{workingMachines}</p>
              </div>
              <Play className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Maszyny w Postoju</p>
                <p className="text-2xl font-bold text-warning">{idleMachines}</p>
              </div>
              <Pause className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-error/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Awarie</p>
                <p className="text-2xl font-bold text-error">{emergencyMachines}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-error" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Wykonane Pliki</p>
                <p className="text-2xl font-bold text-accent">{totalFiles}</p>
              </div>
              <FileText className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
