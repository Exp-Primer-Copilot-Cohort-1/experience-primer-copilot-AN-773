function skillsMember()
{
    var member = new Object();
    member.name = "John Doe";
    member.age = 25;
    member.skills = ["JavaScript", "HTML", "CSS"];
    member.address = {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    };
    member.showSkills = function() {
        var skillsOutput = "";
        for (var i = 0; i < this.skills.length; i++) {
            skillsOutput += this.skills[i] + ", ";
        }
        return skillsOutput;
    };
    return member;
}