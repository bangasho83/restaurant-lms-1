import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Progress } from "./components/ui/progress";

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
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Welcome to the Restaurant LMS</h2>
          <p>Training Progress:</p>
          <Progress value={progress} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">AI-Generated Training Video</h3>
          <video controls className="w-full">
            <source src="https://example.com/sample-training.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">AI-Generated Quiz</h3>
          <p>What is the correct food storage temperature?</p>
          <Input
            placeholder="Type your answer here..."
            value={quizAnswer}
            onChange={(e) => setQuizAnswer(e.target.value)}
          />
          <Button onClick={handleQuizSubmission}>Submit</Button>
        </CardContent>
      </Card>

      {certificate && (
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Certification</h3>
            <p>Congratulations! You are now {certificate}.</p>
            <Button>Download Certificate</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
