const fs = require('fs');
const docx = require('docx');
const { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType, AlignmentType, BorderStyle } = docx;

// Define border style for table cells
const borders = {
    top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
    left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
    right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
};

function createHeaderCell(text) {
    return new TableCell({
        children: [new Paragraph({
            children: [new TextRun({ text, bold: true, font: "Calibri", size: 22 })],
            alignment: AlignmentType.LEFT,
        })],
        shading: { fill: "D9E1F2" },
        borders,
        width: { size: 33, type: WidthType.PERCENTAGE },
    });
}

function createCell(text, isExample = false, isValid = null) {
    const runs = [];
    if (isExample) {
        runs.push(new TextRun({ text, font: "Courier New", size: 22, color: "0563C1" }));
    } else if (isValid === true) {
        runs.push(new TextRun({ text, font: "Calibri", size: 22, color: "006100" }));
    } else if (isValid === false) {
        runs.push(new TextRun({ text, font: "Calibri", size: 22, color: "9C0006" }));
    } else {
        runs.push(new TextRun({ text, font: "Calibri", size: 22 }));
    }
    return new TableCell({
        children: [new Paragraph({ children: runs, alignment: AlignmentType.LEFT })],
        borders,
        width: { size: 33, type: WidthType.PERCENTAGE },
    });
}

const rows = [
    new TableRow({ children: [
        createHeaderCell("Case"),
        createHeaderCell("Example"),
        createHeaderCell("Valid in JS?"),
    ]}),
    new TableRow({ children: [
        createCell("camelCase"),
        createCell("firstName", true),
        createCell("Yes (standard for variables/functions)", false, true),
    ]}),
    new TableRow({ children: [
        createCell("PascalCase"),
        createCell("FirstName", true),
        createCell("Yes (standard for classes/constructors)", false, true),
    ]}),
    new TableRow({ children: [
        createCell("snake_case"),
        createCell("first_name", true),
        createCell("Yes (allowed, less common)", false, true),
    ]}),
    new TableRow({ children: [
        createCell("SCREAMING_SNAKE_CASE"),
        createCell("FIRST_NAME", true),
        createCell("Yes (for constants)", false, true),
    ]}),
    new TableRow({ children: [
        createCell("kebab-case"),
        createCell("first-name", true),
        createCell("No (SyntaxError in JS)", false, false),
    ]}),
    new TableRow({ children: [
        createCell("Hungarian Notation"),
        createCell("strFirstName", true),
        createCell("Yes (older style, avoid)", false, true),
    ]}),
    new TableRow({ children: [
        createCell("Train-Case"),
        createCell("First-Name", true),
        createCell("No (used in HTTP headers)", false, false),
    ]}),
];

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                children: [new TextRun({ text: "JavaScript Naming Conventions", bold: true, size: 32, font: "Calibri" })],
                spacing: { after: 200 },
            }),
            new Table({
                rows,
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
        ],
    }],
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("JS_Naming_Conventions.docx", buffer);
    console.log("Word document created: JS_Naming_Conventions.docx");
});
