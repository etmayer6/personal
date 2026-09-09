from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "resume.pdf"

NAVY = colors.HexColor("#102b36")
TEAL = colors.HexColor("#194f61")
ORANGE = colors.HexColor("#c55a32")
MUTED = colors.HexColor("#4c636a")
LIGHT = colors.HexColor("#e8efed")
CREAM = colors.HexColor("#f8f5ee")
LINE = colors.HexColor("#c8d4d1")


def text(value):
    return escape(value, quote=False)


def build_styles():
    return {
        "name": ParagraphStyle(
            "Name", fontName="Times-Bold", fontSize=27, leading=28, textColor=NAVY, spaceAfter=2
        ),
        "role": ParagraphStyle(
            "Role", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=TEAL
        ),
        "contact": ParagraphStyle(
            "Contact", fontName="Helvetica", fontSize=8.2, leading=11, alignment=TA_RIGHT, textColor=MUTED
        ),
        "section": ParagraphStyle(
            "Section", fontName="Helvetica-Bold", fontSize=8.4, leading=10, textColor=ORANGE, spaceAfter=5
        ),
        "body": ParagraphStyle(
            "Body", fontName="Helvetica", fontSize=8.5, leading=11.2, textColor=MUTED
        ),
        "role_title": ParagraphStyle(
            "RoleTitle", fontName="Helvetica-Bold", fontSize=11.2, leading=13, textColor=NAVY
        ),
        "company": ParagraphStyle(
            "Company", fontName="Helvetica-Bold", fontSize=8.8, leading=11, textColor=TEAL
        ),
        "date": ParagraphStyle(
            "Date", fontName="Helvetica-Bold", fontSize=7.7, leading=10, alignment=TA_RIGHT, textColor=MUTED
        ),
        "bullet": ParagraphStyle(
            "Bullet", fontName="Helvetica", fontSize=8.2, leading=10.3, leftIndent=10, firstLineIndent=-7, textColor=MUTED
        ),
        "skill": ParagraphStyle(
            "Skill", fontName="Helvetica", fontSize=8.4, leading=11, textColor=MUTED
        ),
        "skill_label": ParagraphStyle(
            "SkillLabel", fontName="Helvetica-Bold", fontSize=8.4, leading=11, textColor=NAVY
        ),
        "footer": ParagraphStyle(
            "Footer", fontName="Helvetica", fontSize=7.2, leading=9, textColor=MUTED
        ),
    }


def section_heading(label, styles):
    return [
        Spacer(1, 7),
        Paragraph(text(label.upper()), styles["section"]),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceAfter=7),
    ]


def role_block(title, company, meta, lead, bullets, styles):
    content = []
    heading = Table(
        [[Paragraph(text(title), styles["role_title"]), Paragraph(text(meta), styles["date"])]],
        colWidths=[4.85 * inch, 1.9 * inch],
    )
    heading.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    content.extend([heading, Paragraph(text(company), styles["company"])])
    if lead:
        content.extend([Spacer(1, 3), Paragraph(text(lead), styles["body"])])
    content.append(Spacer(1, 2))
    content.extend(Paragraph("- " + text(bullet), styles["bullet"]) for bullet in bullets)
    return content


def decorate(canvas, doc):
    canvas.saveState()
    canvas.setTitle("Ethan Mayer Resume")
    canvas.setAuthor("Ethan Mayer")
    canvas.setSubject("Software engineering experience, education, and technical toolkit")
    canvas.setKeywords("Ethan Mayer, software engineer, systems testing, Collins Aerospace")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.7)
    canvas.line(doc.leftMargin, 0.48 * inch, letter[0] - doc.rightMargin, 0.48 * inch)
    canvas.setFont("Helvetica", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.29 * inch, "Ethan Mayer / Resume")
    canvas.drawRightString(letter[0] - doc.rightMargin, 0.29 * inch, "Updated 2026 / 1 page")
    canvas.restoreState()


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.58 * inch,
        rightMargin=0.58 * inch,
        topMargin=0.48 * inch,
        bottomMargin=0.68 * inch,
        title="Ethan Mayer Resume",
        author="Ethan Mayer",
    )

    story = []
    header = Table(
        [[
            [Paragraph("Ethan Mayer", styles["name"]), Paragraph("Software Engineer I at Collins Aerospace", styles["role"])],
            Paragraph("LinkedIn / linkedin.com/in/ethan-mayer/<br/>GitHub / github.com/etmayer6/<br/>Site / etmayer6.github.io/personal/", styles["contact"]),
        ]],
        colWidths=[4.85 * inch, 1.9 * inch],
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (0, 0), (-1, -1), 1, NAVY),
    ]))
    story.append(header)

    story.extend(section_heading("Profile", styles))
    story.append(Paragraph(
        text("I build automated systems testing tools for next-generation flight management software, turning complex engineering workflows into repeatable, observable systems."),
        styles["body"],
    ))

    story.extend(section_heading("Professional experience", styles))
    story.extend(role_block(
        "Software Engineer I",
        "Collins Aerospace",
        "2026 - Present / Full time",
        "Developing automated systems testing tools for the next-generation Flight Management System.",
        [
            "Build and maintain automated test tooling for FMS Next Gen.",
            "Turn manual workflows into repeatable, dependable test execution.",
            "Improve the observability and reliability of internal engineering tools.",
        ],
        styles,
    ))
    story.append(Spacer(1, 8))
    story.extend(role_block(
        "Software Engineering Co-op",
        "Collins Aerospace, Next Gen Systems",
        "Jan 2024 - 2026 / Cedar Rapids, IA",
        "",
        [
            "Verified Flight Display System applications on simulation rigs.",
            "Developed automated systems testing software for repeatable engineering workflows.",
            "Produced technical documentation for production engineering work.",
        ],
        styles,
    ))

    story.extend(section_heading("Education", styles))
    education = Table(
        [[
            Paragraph("Iowa State University<br/><font color='#194f61'><b>Bachelor of Science in Software Engineering</b></font>", styles["role_title"]),
            Paragraph("Graduated May 2026<br/>Ames, IA<br/><br/><b>GPA 3.70</b>", styles["date"]),
        ]],
        colWidths=[4.85 * inch, 1.9 * inch],
    )
    education.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (-1, -1), CREAM),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(education)

    story.extend(section_heading("Technical toolkit", styles))
    skills = [
        ("Languages", "Python, Java, C, JavaScript"),
        ("Engineering", "Systems Testing, Automation, Software Verification, Data Analysis, AI-assisted Development"),
        ("Workflow", "Git, Subversion"),
        ("Additional", "Conversational Spanish"),
    ]
    skill_rows = [[Paragraph(text(label), styles["skill_label"]), Paragraph(text(value), styles["skill"])] for label, value in skills]
    skill_table = Table(skill_rows, colWidths=[1.05 * inch, 5.7 * inch])
    skill_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
        ("LINEBELOW", (0, 0), (-1, -2), 0.4, colors.white),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(skill_table)

    document.build(story, onFirstPage=decorate, onLaterPages=decorate)
    print(f"Built {OUTPUT}")


if __name__ == "__main__":
    build()
