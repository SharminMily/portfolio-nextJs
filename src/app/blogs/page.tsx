const Blogs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        Class vs Interface vs Type in TypeScript
      </h1>

      {/* Introduction */}
      <p className="text-gray-500 text-lg mb-6 leading-relaxed">
        TypeScript provides powerful tools to define the structure of your data and objects through <strong className="text-cyan-400">classes</strong>, <strong className="text-cyan-400">interfaces</strong>, and <strong className="text-cyan-400">types</strong>. Understanding their differences is key to writing clean, scalable, and maintainable code.
      </p>

      {/* Class Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-3">🔹 Class</h2>
        <p className="text-gray-500 mb-2">
          A class in TypeScript is a blueprint for creating objects with specific properties and methods. It supports object-oriented programming features like inheritance and encapsulation.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(\`Hello, \${this.name}\`);
  }
}

const p = new Person("Sharmin");
p.greet();`}
        </pre>
      </section>

      {/* Interface Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-3">🔹 Interface</h2>
        <p className="text-gray-500 mb-2">
          An interface defines the shape of an object. It’s purely for type-checking and doesn't compile into JavaScript. Interfaces can be extended and merged.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Sharmin",
  age: 22,
};`}
        </pre>
      </section>

      {/* Type Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-3">🔹 Type</h2>
        <p className="text-gray-500 mb-2">
          A type alias can define not just object shapes, but also union types, tuples, primitives, and more. It is more flexible than interfaces.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`type Product = {
  id: number;
  name: string;
};

type Status = "pending" | "shipped" | "delivered";`}
        </pre>
      </section>

      {/* Comparison Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-3">🔸 Key Differences</h2>
        <ul className="list-disc list-inside text-gray-500 space-y-2">
          <li><strong className="text-cyan-400">Class:</strong> Used to create actual objects and can have methods. Has a runtime presence.</li>
          <li><strong className="text-cyan-400">Interface:</strong> Only for static type checking. Supports extension and declaration merging.</li>
          <li><strong className="text-cyan-400">Type:</strong> More flexible. Can define unions, intersections, primitives, etc. Cannot be merged or extended like interfaces.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <p className="text-gray-500 text-center italic">
        ✅ Use <strong className="text-cyan-400">interfaces</strong> for defining object shapes, 
        <strong className="text-cyan-400"> types</strong> for flexibility, and 
        <strong className="text-cyan-400"> classes</strong> for object-oriented logic with methods and inheritance.
      </p>
    </div>
  );
};

export default Blogs;
