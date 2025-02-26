import { useState } from "react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
import { Progress } from "./components/ui/progress.jsx";

export default function RestaurantLMSPrototype() {
  const [progress, setProgress] = useState(25);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [certificate, setCertificate] = useState(null);

  const handleQuizSubmission = () => {
    if (quizAnswer.toLowerCase() === "correct") {
      setCertificate("Food Handling Certified");
      setProgress(100);
    } else {
      alert("Incorrect answer, please try again.");
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-6 bg-gray-50 min-h-screen shadow-md rounded-xl">
      <Card className="p-6 bg-white rounded-lg shadow">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Restaurant [LMS] Dashboard</h2>
          <p className="text-gray-600">Training Progress:</p>
          <Progress value={progress} />
        </CardContent>
      </Card>
      
      <Card className="p-6 bg-white rounded-lg shadow">
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">AI-Generated Training Video</h3>
          <video controls className="w-full rounded-md shadow">
            <source src="https://example.com/sample-training.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>
      
      <Card className="p-6 bg-white rounded-lg shadow">
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">AI-Generated Quiz</h3>
          <p className="text-gray-700">What is the correct food storage temperature?</p>
          <Input 
            placeholder="Type your answer here..." 
            value={quizAnswer} 
            onChange={(e) => setQuizAnswer(e.target.value)} 
            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
          />
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={handleQuizSubmission}>Submit</Button>
        </CardContent>
      </Card>
      
      {certificate && (
        <Card className="p-6 bg-white rounded-lg shadow">
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Certification</h3>
            <p className="text-gray-700">Congratulations! You are now {certificate}.</p>
            <Button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Download Certificate</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
