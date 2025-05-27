import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Send } from "lucide-react";

const FeedbackForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "suggestion",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, feedbackType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Feedback Submitted",
        description: "Thank you for helping us improve the Greenway!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        feedbackType: "suggestion",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-greenway-800">
          Share Your Feedback
        </CardTitle>
        <CardDescription>
          Help us improve the Greenway by sharing your suggestions, reporting
          issues, or telling us what you love about it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Feedback Type</Label>
            <RadioGroup
              value={formData.feedbackType}
              onValueChange={handleRadioChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="suggestion"
                  id="suggestion"
                />
                <Label
                  htmlFor="suggestion"
                  className="cursor-pointer"
                >
                  Suggestion
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="issue"
                  id="issue"
                />
                <Label
                  htmlFor="issue"
                  className="cursor-pointer"
                >
                  Report an Issue
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="praise"
                  id="praise"
                />
                <Label
                  htmlFor="praise"
                  className="cursor-pointer"
                >
                  Positive Feedback
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please share your feedback with us..."
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send size={16} />
                Submit Feedback
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
