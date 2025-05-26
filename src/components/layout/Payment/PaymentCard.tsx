import { useState, useRef, ChangeEvent } from 'react';

// Define the shape of card details
interface CardDetails {
  f4: string;
  s4: string;
  t4: string;
  l4: string;
  hname: string;
  edm: string;
  edy: string;
  cvv: string;
}

// Type for card type
type CardType = 'visa' | 'master';

// Type for refs array
type InputRefs = Array<HTMLInputElement | null>;

const PaymentCard: React.FC = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    f4: '',
    s4: '',
    t4: '',
    l4: '',
    hname: '',
    edm: '',
    edy: '',
    cvv: ''
  });
  const [flipped, setFlipped] = useState<boolean>(false);
  const [cardType, setCardType] = useState<CardType>('master');
  const inputsRef = useRef<InputRefs>([]);

  // Handler for card number and CVV inputs
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof CardDetails,
    maxLength: number,
    nextField?: number | null
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCardDetails(prev => ({ ...prev, [field]: value }));

    if (value.length === maxLength && nextField !== null && nextField !== undefined) {
      inputsRef.current[nextField]?.focus();
    }

    if (field === 'f4' && value[0] === '4') {
      setCardType('visa');
    } else if (field === 'f4') {
      setCardType('master');
    }
  };

  // Handler for expiry fields
  const handleExpiryInput = (
    e: ChangeEvent<HTMLInputElement>,
    field: 'edm' | 'edy'
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCardDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 md:p-12 font-josefin">
      <h1 className="text-2xl md:text-3xl text-center text-gray-800 mb-8">
        Enter Card Details
      </h1>

      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          {/* Card Front */}
          <div
            className={`w-80 h-52 perspective-1000 ${flipped ? "flipped" : ""}`}
          >
            <div
              className={`relative w-full h-full preserve-3d transition-transform duration-500 ${flipped ? "rotate-y-180" : ""}`}
            >
              <div
                className={`absolute w-full h-full rounded-xl p-6 backface-hidden ${
                  cardType === "visa"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600"
                    : "bg-gradient-to-r from-red-600 to-red-700"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-8 bg-amber-400 rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-chip-pattern bg-cover bg-center" />
                  </div>
                  <div
                    className={`w-16 h-8 bg-contain bg-no-repeat ${
                      cardType === "visa"
                        ? "bg-visa-logo"
                        : "bg-mastercard-logo"
                    }`}
                  />
                </div>
                <div className="flex justify-between gap-2 mb-6 text-white font-mono">
                  <span className="text-xl tracking-wider">
                    {cardDetails.f4 || "XXXX"}
                  </span>
                  <span className="text-xl tracking-wider">
                    {cardDetails.s4 || "XXXX"}
                  </span>
                  <span className="text-xl tracking-wider">
                    {cardDetails.t4 || "XXXX"}
                  </span>
                  <span className="text-xl tracking-wider">
                    {cardDetails.l4 || "XXXX"}
                  </span>
                </div>
                <div className="flex justify-between items-end text-white">
                  <div>
                    <p className="text-xs text-gray-800">CARD HOLDER</p>
                    <p className="uppercase truncate">
                      {cardDetails.hname || "FULL NAME"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-800">VALID TILL</p>
                    <p>
                      {cardDetails.edm || "MM"}/{cardDetails.edy || "YY"}
                    </p>
                  </div>
                </div>
              </div>
              {/* Card Back */}
              <div className="absolute w-full h-full rounded-xl backface-hidden rotate-y-180 bg-gradient-to-r from-red-600 to-red-700">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex justify-between text-xs text-gray-800 mb-2">
                    <span>136589420</span>
                    <span>sddv5</span>
                  </div>
                  <div className="h-10 bg-black/50 mb-4" />
                  <div className="flex justify-end mr-6">
                    <div className="w-4/5">
                      <p className="text-xs text-gray-800">CVV</p>
                      <div className="h-6 bg-gray-100 rounded text-black text-right pr-2">
                        {cardDetails.cvv || "XXX"}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end justify-end">
                    <div className="w-16 h-8 bg-mastercard-logo bg-contain bg-no-repeat" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Form */}
          <div className="max-w-md w-full space-y-6">
            <div>
              <label className="text-gray-800 text-sm">Card Number</label>
              <div className="flex gap-2 mt-2">
                {(["f4", "s4", "t4", "l4"] as Array<keyof CardDetails>).map((field, index) => (
                  <input
                    key={field}
                    ref={el => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength={4}
                    value={cardDetails[field]}
                    onChange={e =>
                      handleInputChange(
                        e,
                        field,
                        4,
                        index < 3 ? index + 1 : null
                      )
                    }
                    className="w-full h-10 bg-gray-300 rounded px-3 text-gray-800 text-center font-mono focus:ring-2 focus:ring-blue-400"
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm">
                Card Holder's Name
              </label>
              <input
                type="text"
                value={cardDetails.hname}
                onChange={e =>
                  setCardDetails(prev => ({
                    ...prev,
                    hname: e.target.value.toUpperCase(),
                  }))
                }
                className="w-full h-10 bg-gray-300 rounded px-3 mt-2 text-gray-800 uppercase focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-gray-800 text-sm">Valid Till</label>
                <div className="relative mt-2">
                  <div className="flex gap-1">
                    <input
                      type="text"
                      maxLength={2}
                      value={cardDetails.edm}
                      onChange={e => handleExpiryInput(e, "edm")}
                      className="w-1/2 h-10 bg-gray-300 rounded px-3 text-gray-800 text-center focus:ring-2 focus:ring-blue-400"
                      placeholder="MM"
                    />
                    <input
                      type="text"
                      maxLength={2}
                      value={cardDetails.edy}
                      onChange={e => handleExpiryInput(e, "edy")}
                      className="w-1/2 h-10 bg-gray-300 rounded px-3 text-gray-800 text-center focus:ring-2 focus:ring-blue-400"
                      placeholder="YY"
                    />
                  </div>
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-gray-500">
                    /
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-gray-800 text-sm">CVV</label>
                <input
                  type="text"
                  maxLength={3}
                  value={cardDetails.cvv}
                  onChange={e =>
                    setCardDetails(prev => ({
                      ...prev,
                      cvv: e.target.value.replace(/[^0-9]/g, ""),
                    }))
                  }
                  onFocus={() => setFlipped(true)}
                  onBlur={() => setFlipped(false)}
                  className="w-full h-10 bg-gray-300 rounded px-3 mt-2 text-gray-800 text-center focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
        .font-josefin { font-family: "Josefin Sans", sans-serif; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .bg-chip-pattern { background-image: url("https://d30y9cdsu7xlg0.cloudfront.net/png/190185-200.png"); }
        .bg-visa-logo {
          background-image: url("https://new.corezoid.com/wp-content/uploads/2016/03/visa-mastercard.png");
          background-position: 10px center;
        }
        .bg-mastercard-logo {
          background-image: url("https://new.corezoid.com/wp-content/uploads/2016/03/visa-mastercard.png");
          background-position: -60px center;
        }
        .transition-transform { transition: transform 0.5s; }
      `}</style>
    </div>
  );
};

export default PaymentCard;
