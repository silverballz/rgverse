import { useEffect, useRef } from "react";

export default function VoiceSearch({
  setVoiceText,
  isListening,
  setIsListening,
}) {
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setVoiceText(transcript);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    return () => {
      recognition.stop();
    };
  }, [setVoiceText]);

  useEffect(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (isListening) {
      try {
        recognition.start();
      } catch (e) {
        // Already started
      }
    } else {
      recognition.stop();
    }
    return () => {
      recognition.stop();
    };
  }, [isListening]);

  return (
    <>
      {isListening ? (
        <div className="fixed left-1/2 top-1/2 z-40 flex  w-72 min-w-64 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-around rounded-lg border border-transparent bg-[#0ea96b] p-8 dark:border-green-600 dark:bg-[#0e3d2c]">
          <p className="mt-2 text-xl font-semibold text-white">Listening...</p>
          <iframe src="https://lottie.host/embed/8471708b-a8cd-4b44-84e3-e5631dec0227/zbiCH7Sctr.json"></iframe>
          <button
            className="m-2 flex flex-row items-center rounded-md border-2 border-[#00A6FB] bg-[#00A6FB] p-2 px-10 text-black transition-colors duration-1000   ease-in-out hover:bg-white hover:text-[#00A6FB] dark:text-white dark:hover:bg-[#141D2F]"
            onClick={() => setIsListening(false)}
          >
            Stop
          </button>
        </div>
      ) : null}
    </>
  );
}
