import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const FantasyCyclingApp = () => {
  const TOTAL_BUDGET = 100;
  
  const [riders] = useState([
    // Super Elite (45-60M €)
    { id: 1, name: "Tadej Pogačar", team: "UAE", value: 60, expectedPoints: 6500, selected: false },
    { id: 2, name: "Jonas Vingegaard", team: "Visma", value: 55, expectedPoints: 6000, selected: false },
    { id: 3, name: "Remco Evenepoel", team: "Soudal", value: 50, expectedPoints: 5500, selected: false },
    
    // Elite A (35-44M €)
    { id: 4, name: "Mathieu van der Poel", team: "Alpecin", value: 44, expectedPoints: 4500, selected: false },
    { id: 5, name: "Wout van Aert", team: "Visma", value: 42, expectedPoints: 4000, selected: false },
    { id: 6, name: "Primož Roglič", team: "BORA", value: 40, expectedPoints: 3800, selected: false },
    { id: 7, name: "Mads Pedersen", team: "Lidl-Trek", value: 38, expectedPoints: 3500, selected: false },
    { id: 8, name: "Jasper Philipsen", team: "Alpecin", value: 35, expectedPoints: 3400, selected: false },

    // Elite B (25-34M €)
    { id: 9, name: "Julian Alaphilippe", team: "Soudal", value: 32, expectedPoints: 3000, selected: false },
    { id: 10, name: "Juan Ayuso", team: "UAE", value: 30, expectedPoints: 2800, selected: false },
    { id: 11, name: "Sepp Kuss", team: "Visma", value: 28, expectedPoints: 2600, selected: false },
    { id: 12, name: "Olav Kooij", team: "Visma", value: 27, expectedPoints: 2500, selected: false },
    { id: 13, name: "Biniam Girmay", team: "Intermarché", value: 26, expectedPoints: 2400, selected: false },
    { id: 14, name: "Carlos Rodriguez", team: "INEOS", value: 25, expectedPoints: 2300, selected: false },

    // Elite C (20-24M €)
    { id: 15, name: "Tom Pidcock", team: "INEOS", value: 24, expectedPoints: 2200, selected: false },
    { id: 16, name: "Arnaud De Lie", team: "Lotto Dstny", value: 23, expectedPoints: 2100, selected: false },
    { id: 17, name: "Mattias Skjelmose", team: "Lidl-Trek", value: 22, expectedPoints: 2000, selected: false },
    { id: 18, name: "Filippo Ganna", team: "INEOS", value: 21, expectedPoints: 1900, selected: false },
    { id: 19, name: "João Almeida", team: "UAE", value: 20, expectedPoints: 1800, selected: false },

    // Elite D (15-19M €)
    { id: 20, name: "Tiesj Benoot", team: "Visma", value: 19, expectedPoints: 1700, selected: false },
    { id: 21, name: "Christophe Laporte", team: "Visma", value: 18, expectedPoints: 1600, selected: false },
    { id: 22, name: "Magnus Cort", team: "Uno-X", value: 17, expectedPoints: 1500, selected: false },
    { id: 23, name: "Mikel Landa", team: "Soudal", value: 16, expectedPoints: 1400, selected: false },
    { id: 24, name: "Fabio Jakobsen", team: "DSM", value: 15, expectedPoints: 1300, selected: false },

    // Elite E (10-14M €)
    { id: 25, name: "Andreas Kron", team: "Lotto Dstny", value: 14, expectedPoints: 1200, selected: false },
    { id: 26, name: "Brandon McNulty", team: "UAE", value: 13, expectedPoints: 1100, selected: false },
    { id: 27, name: "Fred Wright", team: "Bahrain", value: 12, expectedPoints: 1000, selected: false },
    { id: 28, name: "Kasper Asgreen", team: "Soudal", value: 11, expectedPoints: 900, selected: false },
    { id: 29, name: "Valentin Madouas", team: "Groupama", value: 10, expectedPoints: 800, selected: false },

    // Strong A (8-9M €)
    { id: 30, name: "Søren Kragh", team: "Alpecin", value: 9, expectedPoints: 750, selected: false },
    { id: 31, name: "Michael Matthews", team: "Jayco", value: 9, expectedPoints: 700, selected: false },
    { id: 32, name: "Neilson Powless", team: "EF", value: 8, expectedPoints: 650, selected: false },
    { id: 33, name: "Stefan Küng", team: "Groupama", value: 8, expectedPoints: 600, selected: false },

    // Strong B (6-7M €)
    { id: 34, name: "Mikkel Bjerg", team: "UAE", value: 7, expectedPoints: 550, selected: false },
    { id: 35, name: "Ion Izagirre", team: "Cofidis", value: 7, expectedPoints: 500, selected: false },
    { id: 36, name: "Matej Mohorič", team: "Bahrain", value: 6, expectedPoints: 450, selected: false },
    { id: 37, name: "Simon Yates", team: "Jayco", value: 6, expectedPoints: 400, selected: false },

    // Strong C (4-5M €)
    { id: 38, name: "Mads Würtz", team: "Israel", value: 5, expectedPoints: 350, selected: false },
    { id: 39, name: "Alexander Kristoff", team: "Uno-X", value: 5, expectedPoints: 300, selected: false },
    { id: 40, name: "Tim Merlier", team: "Soudal", value: 4, expectedPoints: 250, selected: false },
    { id: 41, name: "Matteo Jorgenson", team: "Visma", value: 4, expectedPoints: 200, selected: false },

    // Solid A (2-3M €)
    { id: 42, name: "Jonas Vingegaard Gregaard", team: "Uno-X", value: 3, expectedPoints: 150, selected: false },
    { id: 43, name: "Michael Valgren", team: "EF", value: 3, expectedPoints: 140, selected: false },
    { id: 44, name: "Casper Pedersen", team: "Soudal", value: 2, expectedPoints: 130, selected: false },
    { id: 45, name: "Julius Johansen", team: "Intermarché", value: 2, expectedPoints: 120, selected: false },

    // Solid B (1M €)
    { id: 46, name: "Christopher Juul", team: "Visma", value: 1, expectedPoints: 100, selected: false },
    { id: 47, name: "Andreas Stokbro", team: "Uno-X", value: 1, expectedPoints: 90, selected: false },
    { id: 48, name: "Tobias Lund", team: "Uno-X", value: 1, expectedPoints: 80, selected: false },
    { id: 49, name: "Frederik Wandahl", team: "Movistar", value: 1, expectedPoints: 70, selected: false },
    { id: 50, name: "William Blume", team: "Uno-X", value: 1, expectedPoints: 60, selected: false }
  ]);

  const [myTeam, setMyTeam] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("value");

  const remainingBudget = TOTAL_BUDGET - myTeam.reduce((sum, rider) => sum + rider.value, 0);
  const totalPoints = myTeam.reduce((sum, rider) => sum + rider.expectedPoints, 0);
  const teamCount = {};
  myTeam.forEach(rider => {
    teamCount[rider.team] = (teamCount[rider.team] || 0) + 1;
  });

  const canAddRider = (rider) => {
    const newBudget = remainingBudget - rider.value;
    const teamRiderCount = (teamCount[rider.team] || 0);
    return newBudget >= 0 && teamRiderCount < 3 && myTeam.length < 20;
  };

  const addRider = (rider) => {
    if (canAddRider(rider)) {
      setMyTeam([...myTeam, rider]);
    }
  };

  const removeRider = (riderId) => {
    setMyTeam(myTeam.filter(r => r.id !== riderId));
  };

  const filteredRiders = riders.filter(rider => 
    rider.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !myTeam.find(r => r.id === rider.id)
  );

  const sortedRiders = [...filteredRiders].sort((a, b) => {
    if (sortBy === "value") return b.value - a.value;
    if (sortBy === "points") return b.expectedPoints - a.expectedPoints;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mit Hold ({myTeam.length}/20 ryttere)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="text-lg">Budget: {remainingBudget}M € / {TOTAL_BUDGET}M €</div>
            <div className="text-lg">Forventede point: {totalPoints}</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Rytter</th>
                  <th className="px-4 py-2 text-left">Hold</th>
                  <th className="px-4 py-2 text-right">Værdi (M €)</th>
                  <th className="px-4 py-2 text-right">Forv. Point</th>
                  <th className="px-4 py-2 text-right">Handling</th>
                </tr>
              </thead>
              <tbody>
                {myTeam.map(rider => (
                  <tr key={rider.id} className="border-b">
                    <td className="px-4 py-2">{rider.name}</td>
                    <td className="px-4 py-2">{rider.team}</td>
                    <td className="px-4 py-2 text-right">{rider.value}</td>
                    <td className="px-4 py-2 text-right">{rider.expectedPoints}</td>
                    <td className="px-4 py-2 text-right">
                      <button 
                        onClick={() => removeRider(rider.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Fjern
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tilgængelige Ryttere</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 space-y-4">
            <input
              type="text"
              placeholder="Søg efter rytter..."
              className="w-full p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2">
              <span>Sortér efter:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded p-1"
              >
                <option value="value">Værdi</option>
                <option value="points">Point</option>
                <option value="name">Navn</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Rytter</th>
                  <th className="px-4 py-2 text-left">Hold</th>
                  <th className="px-4 py-2 text-right">Værdi (M €)</th>
                  <th className="px-4 py-2 text-right">Forv. Point</th>
                  <th className="px-4 py-2 text-right">Handling</th>
                </tr>
              </thead>
              <tbody>
                {sortedRiders.map(rider => (
                  <tr key={rider.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{rider.name}</td>
                    <td className="px-4 py-2">{rider.team}</td>
                    <td className="px-4 py-2 text-right">{rider.value}</td>
                    <td className="px-4 py-2 text-right">{rider.expectedPoints}</td>
                    <td className="px-4 py-2 text-right">
                      <button 
                        onClick={() => addRider(rider)}
                        disabled={!canAddRider(rider)}
                        className={`px-2 py-1 rounded ${
                          canAddRider(rider)
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Tilføj
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>